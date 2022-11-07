//traer los posts
const getposts = () => {
    return db.query('SELECT * FROM posts,autores WHERE posts.Autores_idAutores=autores.idAutores');
    }

    //post por autor
const getpostbyautor = (idAutores) => {
    return db.query('SELECT * FROM posts,autores WHERE posts.Autores_idAutores=autores.idAutores AND posts.Autores_idAutores=?',[idAutores]);
    }

//crear un post
const createpost =({titulo, descripcion, fecha, categoria ,Autores_idAutores})=>{
    return db.query('INSERT INTO posts (titulo, descripcion, fecha, categoria ,Autores_idAutores	) VALUES (?,?,?,?,?)',[titulo, descripcion, fecha, categoria ,Autores_idAutores	])
    }


//actualizar un post
const updatepost =(idposts,{titulo, descripcion, fecha, categoria ,Autores_idAutores})=>{
    return db.query('UPDATE posts SET titulo=?, descripcion=?, fecha=?, categoria =?,Autores_idAutores=? WHERE idposts=?',[titulo, descripcion, fecha, categoria ,Autores_idAutores,idposts])
    }

//eliminar un post
const deletepost =(idposts)=>{
    return db.query('DELETE FROM posts WHERE idposts=?',[idposts])
    }

module.exports = {
    getposts,createpost,updatepost,deletepost,getpostbyautor
    }