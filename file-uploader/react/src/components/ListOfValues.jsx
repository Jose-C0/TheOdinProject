import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchExample () {
  const [dirHome, setDirHome] = useState([]);

  const hostApi = import.meta.env.VITE_API_URL;
  const port = import.meta.env.VITE_API_PORT;

  const url = `http://${hostApi}:${port}/api`;

  useEffect(() => {
    axios
      .get(`${url}/values`)
      .then((res) => {
        setDirHome(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const changeNameDir = (keyFolder, e) => {
    const newDirHome = [...dirHome];
    newDirHome.find((x) => x.id === keyFolder).name = e.target.value;
    setDirHome(newDirHome);
  };

  const changeNameFile = (keyFiles, e, keyFolder) => {
    const newFile = [...dirHome];
    // console.log(
    //   newFile
    //     .flatMap((folder) => folder.files)
    //     .find((file) => file.id === keyFiles)
    // );

    const filesPertenceToFolder = newFile.find((x) => x.id === keyFolder).files;

    const doChangeName = filesPertenceToFolder.find((x) => x.id === keyFiles).name = e.target.value;

    doChangeName;

    // newFile[keyFolder].files
    //   .find((x) => x.id === keyFiles).name = e.target.value;

    setDirHome(newFile);
  };

  const myHomeDirectory = (
    <>
      <form method='POST' action="/test">
        {dirHome.map((folder) => (
          <section key={folder.id}>
            <input
              type='text'
              name={folder.name}
              value={folder.name}
              onChange={(e) => changeNameDir(folder.id, e)}
            />
            {folder.files.map((file) => (
              <input
                key={file.id}
                type='text'
                name={file.name}
                value={file.name}
                onChange={(e) => changeNameFile(file.id, e, folder.id)}
              />
            ))}
          </section>
        ))}
        <button type='submit'> OK </button>
      </form>
    </>
  );

  return myHomeDirectory;
}

export default FetchExample;
