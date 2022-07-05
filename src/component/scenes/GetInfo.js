import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const GetInfo = ({setVR, setAR}) => {
  const { gl } = useThree();
  useEffect(() => {
    gl.xr.addEventListener( 'sessionstart', () =>{
        console.log('entro ar');
        setVR([0,0,0]);
        setAR([0.4,0.4,0.4]);

    } );
    gl.xr.addEventListener( 'sessionend', () => {
        console.log('salio ar');
        setVR([1,1,1]);
        setAR([0,0,0]);

    } )
  });
  return null;
};

export default GetInfo;
