import React, {useState, useEffect} from 'react';
import FileUploadPage from './pages/FileUploadPage';
import {getSingleFile, getMultipleFile} from './api/index'
function App() {

  const [singleFile, setSingleFile] = useState([]);
  const [multipleFile, setMultipleFile] = useState([]);

  const getSingleFileList=async()=>{
    try {
      const fileList = await getSingleFile();
      setSingleFile(fileList);
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getSingleFileList();
    getMultipleFileList();
  }, [])
  

  const getMultipleFileList=async()=>{
    try {
      const fileList = await getMultipleFile();
      setMultipleFile(fileList);
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
        <div class="container mx-auto px-4 ">
          <h3 class="text-4xl text-center  font-normal leading-normal mt-0 mb-2 text-rose-600">
              Single and Multiple File Upload using MERN Stack
          </h3> 
          <hr></hr>  
          <br></br>
          <FileUploadPage getSingleCall={()=>getSingleFileList()} getMultipleCall={()=>getMultipleFileList()}/>   
      </div>

      <div class="container mx-auto px-2 flex flex-row">
        <div class="basis-1/2">
            <h6 class="text-xl font-normal leading-normal mt-0 mb-2 text-pink-800">
              Single File
            </h6>
            <div class="grid grid-cols-4 gap-3">
            
              {singleFile.map((file, index)=>
                <div key={index} class="flex flex-wrap justify-center">
                 
                    <img src={`http://localhost:4000/${file.filePath}`} />
                 
                </div>
              )}
            </div>
        </div>
        
        <div class="basis-1/2 ml-10">
          
        <h6 class="text-xl font-normal leading-normal mt-0 mb-2 text-pink-800">
              Multiple File
            </h6>
            <div class="grid grid-rows-4 ">
            
              {multipleFile.map((element, index)=>
                <div key={index} class="flex flex-wrap ">
                      <h6 class="text-xl font-normal leading-normal mt-0 mb-2 text-blue-800">
                          {element.title}
                      </h6>

                      <div class="flex grid grid-cols-4 gap-3 ">
                      {element.files.map((file, index) =>
                            <img class="h-48 w-full object-cover" src={`http://localhost:4000/${file.filePath}`} />  
                      )}
                     
                     </div>
                </div>
              )}
            </div>
            
        </div>


      </div>
    </>
  );
}

export default App;
