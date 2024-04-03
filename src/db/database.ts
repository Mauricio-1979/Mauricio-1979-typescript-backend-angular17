import mongoose from "mongoose";


export async function conectarDB(){
  try {
    if(process.env.DATABASE_URL){

      await mongoose.connect(process.env.DATABASE_URL)    
    } else {
      throw new Error('DATABASE_URL environment variable is not set')
    }
    console.log("Conexion exitosa");
    
  } catch (error) {
    console.log("Error al conectar con MongoDB: ", error);
    
  }
}

export default mongoose;