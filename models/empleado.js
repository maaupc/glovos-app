const {Schema, model, Schema}=require("mongoose")

const EmpleadoSchema= new Schema({
    dni:{
        type: String,
        required: [true,"El dni es obligatorio"],

    },
    nombre:{
        type: String,
        required: [true,"El nombre es obligatorio"],

    },
    apellido:{
        type: String,
        required: [true,"El apellido es obligatorio"],

    },
    email:{
        type: String,
        required: [true, "El correo es obligatorio"],
        unique:true,
    },
    password:{
        type: String,
        required: [true, "La contraseña es obligatoria"],
    },
    estado:{
        type: Boolean,
        default:true,
    },
    img:{
        type: String,
    },
    licencia:{
        type: String,
        default:true,
    },
    rol:{
        type: String,
        required: true,
        enum:["USER_ROLE","ADMIN_ROLE"],
    },
    
})
//Para no mostrar password  ni __ v
EmpleadoSchema.methods.toJSON=function(){
    const {password, __v, _id,...empleado}=this.toObject();
    usuario.uid= _id
    return empleado;
};

module.exports=model("Empleado", EmpleadoSchema)
