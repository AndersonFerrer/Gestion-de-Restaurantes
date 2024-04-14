import { useToken } from "../store/store";
import LoginImage from "../assets/images/LoginImage.jpg";
export default function Login() {
  const { setToken } = useToken();
  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col justify-center w-2/5 h-full gap-8 px-24 bg-white">
        <div className="flex items-center justify-center gap-2">
          <div>
            <h1 className="text-2xl font-bold">LatinSoft</h1>
            <p className="text-sm text-gray-400">Hotel Admin</p>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-xl font-[400]">Bienvenido de vuelta!</h1>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            voluptatum dignissimos quia? Delectus earum ut
          </p>
        </div>
        <img src={LoginImage} alt="" />
      </div>
      <div className="w-3/5 h-full bg-red-200">
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col w-2/5 gap-4">
            <h1 className="text-3xl mb-2 font-[400] text-center">
              Iniciar Sesión
            </h1>
            <div>
              <label className="text-lg font-[500]">Email</label>
              <input
                type="text"
                placeholder="Email"
                className="w-full px-6 py-4 mt-1 border-2 border-gray-200 rounded-md"
              />
            </div>
            <div>
              <label className="text-lg font-[500]">Contraseña</label>
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full px-6 py-4 mt-1 border-2 border-gray-200 rounded-md"
              />
            </div>
            <div>
              <input type="checkbox" />
              <label className="ml-2 black">Recordar contraseña</label>
            </div>
            <button
              onClick={setToken}
              className="w-full py-4 mt-2 text-xl font-[500] text-white bg-red-600 rounded-md"
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
