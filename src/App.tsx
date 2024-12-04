import React, { useContext, useState } from 'react';
import { DataContext } from './context/DataContext';

const App: React.FC = () => {
  const myData = useContext(DataContext);
  const [fakeStore, setFakeStore] = useState(false);
  const [dummyStore, setDummyStore] = useState(false);
  const [jsonStore, setJsonStore] = useState(false);

  const handleButtonClick_fakeStore = () => {
    setFakeStore(true);
    setDummyStore(false);
    setJsonStore(false);
  };

  const handleButtonClick_dummyStore = () => {
    setDummyStore(true);
    setJsonStore(false);
    setFakeStore(false);
  };
  
  const handleButtonClick_jsonStore = () => {
    setJsonStore(true);
    setDummyStore(false);
    setFakeStore(false);
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column ">
      <div className='d-flex justify-content-center my-3'>
        <button className="btn btn-dark mx-4" onClick={handleButtonClick_fakeStore}>FakeStoreApis</button>
        <button className="btn btn-dark mx-4" onClick={handleButtonClick_dummyStore}>DummyJsonApis</button>
        <button className="btn btn-dark mx-4" onClick={handleButtonClick_jsonStore}>JsonPlaceHolderApis</button>
      </div>

      {fakeStore ? (
        <div>
          {myData?.fakeApi.length === 0 ? (
            <h1>LOADING...</h1>
          ) : (
            myData?.fakeApi.map((item) => (
              <div key={item.id} className="card mb-3 align-items-center" style={{ width: '800px' }}>
                <div className="row justify-content-between g-0">
                  <div className="col-md-4">
                    <img src={item.image} width={125} className="img-fluid rounded-start" alt={item.title} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.title.slice(0, 20)}...</h5>
                      <p className="card-text">{item.description.slice(0, 55)}...</p>
                      <p className="card-text">
                        <b className="text-body-secondary">{item.price}$</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      ) : null}

      {dummyStore ? (
        <div>
          {myData?.dummyApi.length === 0 ? (
            <h1>LOADING...</h1>
          ) : (
            myData?.dummyApi.map((item) => (
              <div key={item.id} className="card mb-3 align-items-center" style={{ width: '800px' }}>
                <div className="row justify-content-between g-0">
                  <div className="col-md-4">
                    <img src={item.images} width={125} className="img-fluid rounded-start" alt={item.title} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.title.slice(0, 20)}...</h5>
                      <p className="card-text">{item.description.slice(0, 55)}...</p>
                      <p className="card-text">
                        <b className="text-body-secondary">{item.price}$</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      ) : null}

      {jsonStore ? (
        <div>
          {myData?.jsonApi.length === 0 ? (
            <h1>LOADING...</h1>
          ) : (
            myData?.jsonApi.map((item) => (
              <div key={item.id} className="card mb-3 align-items-center" style={{ width: '800px' }}>
                <div className="row justify-content-between g-0">
                  <div className="col-md-12">
                    <div className="card-body">
                      <h5 className="card-title">{item.title.slice(0, 20)}...</h5>
                      <p className="card-text">{item.body}...</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      ) : null}
    </div>
  );
};

export default App;
