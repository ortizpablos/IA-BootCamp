import { MongoClient, ObjectId } from 'mongodb';

export async function getServerSideProps(context) {
  const { _id } = context.params;

  try {
    const client = await MongoClient.connect(
      'mongodb+srv://ortizpablos:123456P@cluster0.bady7.mongodb.net/bootcampia?retryWrites=true&w=majority&appName=Cluster0'
    );
    const db = client.db('bootcampia');
    const collection = db.collection('Aprendice');
    const item = await collection.findOne({ _id: ObjectId(id) });

    client.close();

    return {
      props: {
        item: JSON.parse(JSON.stringify(item))
      }
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        item: null
      }
    };
  }
}

const GetAprendizDBComponent = ({ item }) => {
 const data = getServerSideProps();
 console.log(data);
  
  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      
    </div>
  );
};

export default GetAprendizDBComponent;