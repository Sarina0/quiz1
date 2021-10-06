
import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://Sari:LpMETVpFmzEeueP0@saricluster.nafza.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

export function getFlamingos() {
    const client = new MongoClient(uri);

    return new Promise(
        (resolve, reject) => {
            client.connect(async error => {
               
                if (error) {
                    reject(error);
                    return;
                }

               
                const collection = client.db().collection('flamingo');
                const cursor = collection.find();
                const data = await cursor.toArray();
                console.log(data);

              
                client.close();

                resolve(data);
            });
        }
    )
};

export function createFlamingo(name, hair, food) {
    const client = new MongoClient(uri);

    return new Promise(
        (resolve, reject) => {
            client.connect(async error => {
                // guard programming, exit early
                // catch errors and invalid states early
                if (error) {
                    reject(error);
                    return;
                }

                // from the cluster we are connected to
                // connect to the database named test and get
                // the collection named devices
                const collection = client.db().collection('flamingo');
                function insertOneFlamingo() {
                    return new Promise(
                        (resolve, reject) => {
                            collection.insertOne(
                                {
                                    name,
                                    hair,
                                    food
                                },
                                () => {
                                    resolve('success');
                                    console.log("successfully saved Flamingo");
                                }
                            );
                        }
                    );
                }
                await insertOneFlamingo();

                // perform actions on the collection object
                client.close();

                resolve('success');
            });
        }
    )
};