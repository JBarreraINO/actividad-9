//traer los autores
const getAutores = () => {
  return db.query('SELECT * FROM autores')
}
//crear un autor
const createAutor =({nombre,email,imagen })=>{
  return db.query('INSERT INTO autores (nombre,email,imagen) VALUES (?,?,?)',[nombre,email,imagen])
}
//actualizar un autor
const updateAutor =(idAutores,{nombre,email,imagen })=>{
  return db.query('UPDATE autores SET nombre=?,email=?,imagen=? WHERE idAutores=?',[nombre,email,imagen,idAutores])
}




//eliminar un autor
const deleteAutor =(idAutores)=>{
  return db.query('DELETE FROM autores WHERE idAutores=?',[idAutores])
}



module.exports = {
    getAutores,createAutor,updateAutor,deleteAutor
}
