const express = require('express');
const router = express.Router();
const datos = require("../Contenedor/Datos")
const productos = new datos; 

router.get("/", (req, res)=>{ 
  const producGeneral = productos.getAll()
  if(producGeneral.length==0){ 
    res.send("La lista esta vacia, por favor agregar un producto !")
  }
  res.json( {msg:"Lista general de productos.", producGeneral})
})


router.get("/:id", (req,res)=>{ 
  const idBuscar = req.params.id
  const objetoAecontrar = productos.getByOne(idBuscar) 
  if(objetoAecontrar.length==0){ 
    res.send("No se encontro el producto")
  }
  res.json({Producto:objetoAecontrar})
})

router.post("/", ({body},res)=>{
  productos.addOne(body)
  res.send({mensaje:"Producto agregado."})
})

router.put("/:id", (req,res)=>{
  // let idProducto=req.params.id; 
  // let productoActualizar = productos.getByOne(idProducto); 
  // let {nombre, precio, imagen} = req.body; 
  // if(nombre) productoActualizar.nombre=nombre; 
  // if(precio) productoActualizar.precio=precio
  // if(imagen) productoActualizar.imagen=imagen
  
  // res.send({msg:"Producto actualizado con el ID de: " + idProducto})


  let idActualizar = req.params.id;
  res.send({ProductoActualizado:req.body})
})

router.delete("/:id", (req,res)=>{ 
  let idEliminar = req.params.id; 
  productos.deleteOne(idEliminar)
  res.send("Producto eliminado")

})

module.exports = router;


