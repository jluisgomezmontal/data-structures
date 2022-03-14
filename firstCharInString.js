const primerChar = texto =>{
  const elements = texto.split('').reduce((acc,cur)=>{
      acc[cur]=(acc[cur] || 0)+1

      return acc
      
  },{})

  element = Object.entries(elements).find(([key,value], index)=> value === 1)[0]
  console.log(element)

}

primerChar('AABBCDDEEVFFC')