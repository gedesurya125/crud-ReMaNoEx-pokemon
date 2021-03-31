const basicStyle ={
  button:"px-4 py-1 rounded cursor-pointer mx-1 my-2 font-bold "
}
export const componentStyle = {
  button:{
    default: basicStyle.button + "bg-blue-600 hover:bg-blue-400 text-white hover:text-gray-900",
    danger: basicStyle.button + "bg-red-600 hover:bg-red-400 text-white hover:text-gray-900",
    disabled: "px-4 py-1 rounded mx-1 my-2 cursor-auto font-bold bg-gray-400 text-white border-2 border-white"
  }
}