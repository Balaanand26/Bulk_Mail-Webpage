import React, { useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";

const App = () => {
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState(false);
  const [emailList, SetEmailList] = useState([]);

  function handlemsg(evt) {
    setMsg(evt.target.value);
  }

  function handlefile(evt) {
    const file = evt.target.files[0];

    const reader = new FileReader();
    reader.onload = function (e) {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const emailList = XLSX.utils.sheet_to_json(worksheet, { header: "A" });
      const totalemail = emailList.map(function (item) {
        return item.A;
      });
      SetEmailList(totalemail);
    };
    reader.readAsBinaryString(file);
  }

  function send() {
    setStatus(true);
    axios
      .post("https://bulk-mail-backend-k5oz.onrender.com/sendmail", {
        msg: msg,
        emailList: emailList,
      })
      .then(function (data) {
        if (data.data === true) {
          alert("Email Sent Successfully");
          setStatus(false);
        } else {
          alert("Failed");
        }
      });
  }

  return (
    <div className="text-center p-4 bg-gray-900  text-white h-dvh">
      <div className="text-3xl font-bold mb-16">
        <h1>BulKMail</h1>
      </div>
      <div className="text-xl">
        <h1>we can help your business with sending multiple emails at once</h1>
      </div>
      <div>
        <textarea
          className="rounded-2xl mt-10 w-[80%] h-32 py-2 px-7 bg-gray-700 outline-none shadow-2xl mb-4"
          onChange={handlemsg}
          value={msg}
        ></textarea>

        <div className="mt-5">
          <label className="font-semibold" >
            Upload file: </label>
          <input
            className="w-[20%] border border-gray-300 rounded-lg cursor-pointer  focus:outline-none p-2"
            type="file"
            onChange={handlefile}
          />
        </div>

        <p className="text-xl mt-5">
          Total Emails in the file: {emailList.length}
        </p>
        <p className="mt-5 text-2xl font-semibold underline">Email Details</p>
        <div className="mt-5">
          
          {emailList.map((email,index)=>(
            <p key={index} className="text-gray-300 mt-2">
              {email}
            </p>
          ))}
        </div>


        <button
          onClick={send}
          className="bg-gray-700 border text-white px-8 py-2 rounded-full text-lg font-semibold mt-5 mb-20"
        >
          {status ? "Sending" : "Send"}
        </button>
      </div>
    </div>
  );
};

export default App;
