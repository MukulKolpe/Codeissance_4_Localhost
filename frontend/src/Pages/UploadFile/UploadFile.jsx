import "./UploadFile.css";
import { useState , useEffect , React} from "react";
import { useMoralis, useMoralisFile } from "react-moralis";

const UploadFile = () => {
  const { authenticate, isAuthenticated, user } = useMoralis();

  const { saveFile, moralisFile } = useMoralisFile();
  const [name,setname] = useState();
  const[lastName,setlastName] = useState();
  const[hash,setHash] = useState();
  const[eth,setEth] = useState();
  const[key,setKey] = useState();
  const [photoFile, setPhotoFile] = useState();
  const [photoFileName, setPhotoFileName] = useState();
  const [doc, setDocPic] = useState();


  console.log(isAuthenticated)
  const metadata = {
    name: name,
    lastname: lastName 
  }

  useEffect(() => {
    if (user) {
      setDocPic(user.attributes?.profilePic?._url);
      setEth(user.get("ethAddress"))
    }
  }, [user]);

  const onChangePhoto = (e) => {
    setPhotoFile(e.target.files[0]);
    setPhotoFileName(e.target.files[0].name);
  };

  const onSubmitPhoto = async (e) => {
    const file = photoFile;
    const name = photoFileName;
    let fileIpfs = await saveFile(name, file, { saveIPFS: true,metadata });
    user.set("profilePic", fileIpfs);
    await user.save();
    setDocPic(user.attributes.profilePic._url);
    console.log(fileIpfs);
    console.log(fileIpfs._hash)
    setHash(fileIpfs._hash)
    setKey(eth+ fileIpfs._hash)
  };

  if(!isAuthenticated){
    return (
      <div>
      <button onClick={() => authenticate()}>Authenticate</button>
    </div>
    )
  }

return (
  <div>
    <h1>Welcome {user.get("ethAddress")}</h1>
    <div className="profile-pic-container">
      <img className="profile-pic" src={doc} alt="" />
    </div>

    <div className="profile-pic-update-container">
    {isAuthenticated ? null : <button onClick={() => authenticate()}>login</button> }
      
      <form onSubmit={onSubmitPhoto}>
        <div className="mb-3">
          <label htmlFor="profilePhoto" className="form-label">
            Select a Profile Pic
          </label>
          <input
            className="form-control"
            type="file"
            accept="image/*"
            multiple={false}
            id="profilePhoto"
            onChange={onChangePhoto}
          />
        </div>
        <input
          type="text"
          placeholder='Enter name'
          onChange={(e) => {setname(e.target.value)}}
        />
         <input
          type="text"
          placeholder='Enter Last Name'
          onChange={(e) => {setlastName(e.target.value)}}
        />
        <input
          type="button"
          value="Upload"
          className="btn btn-primary btn-block mt-1"
          onClick={onSubmitPhoto}
        />
      </form>
    </div>


  </div>

 

)  
};

export default UploadFile;
