import gradient_blur_pink_blue_abstract from '../../assets/gradient-blur-pink-blue-abstract.webp'

const Question = () => {
  return (
    <div className=' relative w-full h-auto flex gap-1 bg-[#181e2e] min-h-72 my-4 rounded-4xl  '>
        <div className=' min-h-72 w-full absolute   ' >
        <img src={gradient_blur_pink_blue_abstract} alt="" className=' h-full w-full  absolute  ' />

        </div>
<div className='  w-[50%] '>
     lorem300
</div>
<div className=' w-[50%] '>
     hi
</div>
    </div>
  )
}

export default Question