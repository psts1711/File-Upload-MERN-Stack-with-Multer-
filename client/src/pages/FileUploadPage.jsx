import React, {useState, useEffect} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {singleFileUpload, multipleFileUpload} from '../api';


const FileUploadPage = (props) => {

  const [singleFile, setSingleFile] = useState('');
  const [multipleFile, setMultipleFile] = useState('');
  const [title, setTitle] = useState('');

  const [singleProgress, setSingleProgress] = useState(0);
  const [multipleProgress, setMultipleProgress] = useState(0);



  const singleFileChange=(e)=>{
    setSingleFile(e.target.files[0])
    setSingleProgress(0);

  }

  const uploadSingleFile = async ()=>{
   // console.log(singleFile)
   const formData = new FormData();
   formData.append('file', singleFile);
   await singleFileUpload(formData, singleFileProgressBar);
   props.getSingleCall();
  }

  const multipleFileChange=(e)=>{
    setMultipleFile(e.target.files)
    setMultipleProgress(0);

  }

  const uploadMultipleFile = async ()=>{
    const formData = new FormData();
    formData.append('title', title);
    for (let i = 0; i < multipleFile.length; i++) {
        formData.append('files', multipleFile[i]);
    }
    await multipleFileUpload(formData, multipleFileProgressBar);
    props.getMultipleCall();
  }

  const singleFileProgressBar = {
    onUploadProgress: (progressEvent) => {
        const {loaded, total} = progressEvent;
        const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
        setSingleProgress(percentage);
    }
  }

  const multipleFileProgressBar = {
    onUploadProgress: (progressEvent) => {
        const {loaded, total} = progressEvent;
        const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
        setMultipleProgress(percentage);
    }
  }

  return (
    <div class="flex flex-row">

        <div class="basis-1/2">
            <h5 class="text-2xl  font-normal leading-normal mt-0 mb-2 text-teal-500">
                Single File Upload
            </h5>
            <input type="file" onChange={(e)=>singleFileChange(e)} class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" />
            <br></br>

            <div class="grid grid-cols-4 gap-3">
                <div><button onClick={()=>uploadSingleFile()} class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Upload
                </button></div>


               <div style={{ width: 60, height: 60 }}>
               <CircularProgressbar
                            value={singleProgress}
                            text={`${singleProgress}%`}
                            styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(255, 136, 136, ${singleProgress / 100})`,
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                            })}
                        />
               </div>
            </div>
        </div>
        <div class="basis-1/2 ml-10">
            <h5 class="text-2xl  font-normal leading-normal mt-0 mb-2 text-teal-500">
                Multiple File Upload
            </h5>

            <div class="mb-3 pt-0">
                <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="Title" class="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
            </div>

            <input type="file" multiple onChange={(e)=>multipleFileChange(e)} class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" />
            <br></br>


            <div class="grid grid-cols-4 gap-3">
                <div>
                    <button onClick={()=>uploadMultipleFile()} class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Upload Multiple Images
                </button>
                </div>


               <div style={{ width: 60, height: 60 }}>
               <CircularProgressbar
                            value={multipleProgress}
                            text={`${multipleProgress}%`}
                            styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(255, 136, 136, ${multipleProgress / 100})`,
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                            })}
                        />
               </div>
            </div>


         
        </div>

    </div>
  )
}

export default FileUploadPage