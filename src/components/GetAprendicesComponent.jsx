/* 
import Link from "next/link";


 
const getAprendices = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/aprendices", {
            cache: "no-store",
        });
 
        if (!res.ok) {
            throw new Error("Failed to fetch aprendices");
        }
 
        return res.json();
    } catch (error) {
        console.log("Error loading aprendices: ", error);
    }
};
 
export default async function GetAprendicesComponent() {
    const aprendices  = await getAprendices();
    console.log(aprendices);
 
    return (
        <>
            <div className="overflow-x-auto">
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Document</th>
                    <th>Ficha</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th />
                </tr>
                </thead>
                <tbody>
                    {aprendices.map((rs) => (
                    <tr className="hover" key={rs._id}>
                        
                        <td>
                            <div className="flex items-center gap-3">
                               
                                <div>
                                <div className="font-bold">{rs.name}</div>
                                </div>
                            </div>
                        </td>
                        <td>${rs.document}</td>
                        <td>{rs.ficha}</td>
                        <td>{rs.email}</td>
                        <td>{rs.phone}</td>
                        
                    </tr>
                    ))}                    
                </tbody>
            </table>
            </div>
        </>
    );
} */


const getAprendices = async () => {
  try {
      const res = await fetch("/api/aprendices", {
          cache: "no-store",
      });

      if (!res.ok) {
          throw new Error("Failed to fetch aprendices");
      }

      return res.json();
  } catch (error) {
      console.error("Error loading aprendices: ", error);
      return []; // Retorna un array vacío en caso de error
  }
};

export default async function GetAprendicesComponent() {
  const aprendices = await getAprendices();
  console.log(aprendices);

  return (
      <div className="overflow-x-auto">
          <table className="table">
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Document</th>
                      <th>Ficha</th>
                      <th>Email</th>
                      <th>Phone</th>
                  </tr>
              </thead>
              <tbody>
                  {aprendices.map((rs) => (
                      <tr className="hover" key={rs._id}>
                          <td>
                              <div className="flex items-center gap-3">
                                  <div className="font-bold">{rs.name}</div>
                              </div>
                          </td>
                          <td>{rs.document}</td>
                          <td>{rs.ficha}</td>
                          <td>{rs.email}</td>
                          <td>{rs.phone}</td>
                      </tr>
                  ))}                    
              </tbody>
          </table>
      </div>
  );
}