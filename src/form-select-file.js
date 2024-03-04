// import React from "react";

// export default function FormSelectFile(){
//     const inputFile = React.useRef()
//     const selectMaxNumFiles = React.useRef()
//     const selectMaxSize = React.useRef()

//     let maxNumFiles = [1,2,3,4,5]
//     let maxFileSizes = [50,100,200,500,1000]

//     const onClickButton = () => {
//         let maxNumFiles = selectMaxNumFiles.current.value
//         let maxSize = selectMaxSize.current.value

//         if(inputFile.current.files.length > maxNumFiles){
//             alert(`เลือกได้ไม่เกิน ${maxNumFiles} ไฟล์`)
//             return
//         }
//         for(let f of inputFile.current.files){
//             if(f.size > maxSize *1000){
//                 alert(`ขนาดของแต่ละไฟล์ต้องไม่เกิน ${maxSize} KB`)
//                 return
//             }
//         }
//         alert('Files OK')
//     }

//     return(
//         <div>

//         </div>
//     )
// }