import { useEffect, useState } from "react";
import excel from '../../sources/excel.png';
import powerpoint from '../../sources/powerpoint.png';
import word from '../../sources/word.png';
import pdf from '../../sources/pdf.png';
import image from '../../sources/image.png';
import txt from '../../sources/txt.png';
import folder from '../../sources/folder.png';
// import back from '../../sources/back2.png';

function Templates() {

  const TemplateItem = ({ item }) => {

    const isFolder =
      item.type === "folder";

    return (
      <div
        onClick={() => isFolder ? openFolder(item) : downloadFile(item.path)}
        className="bg-white rounded-xl border-1 border-gray-200 p-2 shadow-md hover:shadow-xl transition cursor-pointer flex flex-col justify-center items-center">

        <div className="text-7xl mb-3">
          {getFileIcon(item)}
        </div>

        <div className="w-full max-w-[240px]">
          <h3 className="font-light truncate text-center">
            {getFileTitle(item)}
          </h3>
        </div>

      </div>
    );
  };

  const getFileIcon = (file) => {

    if (file.type === "folder") {
      return <img src={folder} alt="folder" />;;
    }

    const ext = file.name
      .split(".")
      .pop()
      ?.toLowerCase();

    switch (ext) {
      case "xlsx":
      case "xls":
        return <img src={excel} alt="excel" />;

      case "doc":
      case "docx":
        return <img src={word} alt="word" />;

      case "pdf":
        return <img src={pdf} alt="pdf" />;

      case "ppt":
      case "pptx":
        return <img src={powerpoint} alt="powerpoint" />;

      case "png":
      case "jpg":
      case "jpeg":
      case "webp":
        return <img src={image} alt="image" />;

      case "txt":
        return <img src={txt} alt="txt" />;

      default:
        return "📄";
    }
  };

  const getFileTitle = (file) => {
    if (file.type === "folder") return file.name;

    return file.name.replace(/\.[^/.]+$/, "");
  };


  const downloadFile = async (file) => {

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/templates`, {
      credentials: "include"
    })


    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = file;

    document.body.appendChild(link);

    link.click();

    link.remove();

    window.URL.revokeObjectURL(url);
  };

  const [pathStack, setPathStack] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/templates", {
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => {
        setFiles(data);
        setCurrentItems(data);
        setPathStack([]);
      })
      .catch(err => console.error(err));
  }, []);

  const openFolder = (folder) => {

    setPathStack(prev => [
      ...prev,
      {
        name: folder.name,
        items: folder.children
      }
    ]);

    setCurrentItems(folder.children);
  };

  const goToLevel = (index) => {

    const newStack = pathStack.slice(0, index + 1);

    setPathStack(newStack);
    setCurrentItems(newStack[index].items);
  };

  const goBack = () => {
    if (pathStack.length === 0) return;

    const newStack = pathStack.slice(0, -1);
    setPathStack(newStack);

    if (newStack.length === 0) {
      setCurrentItems(files);
    } else {
      setCurrentItems(newStack[newStack.length - 1].items);
    }
  };

  const sortedItems = [...currentItems].sort((a, b) => {
    // 1. папки всегда сверху
    if (a.type === "folder" && b.type !== "folder") return -1;
    if (a.type !== "folder" && b.type === "folder") return 1;

    // 2. внутри одинакового типа — по алфавиту
    return a.name.localeCompare(b.name);
  });

  const goRoot = () => {
    setCurrentItems(files);
    setPathStack([]);
  };

  return (
    <div>
      {/* <h1 className="text-5xl font-black mb-10">
        ✨ Шаблоны
      </h1> */}
      <div>
        <div className="flex items-center gap-2 text-gray-500 mb-4">

          <span
            className="cursor-pointer hover:text-black"
            onClick={goRoot}
          >
            📁 Шаблоны
          </span>

          {pathStack.map((folder, index) => (
            <span key={index} className="flex items-center gap-2">

              <span>/</span>

              <span
                className="cursor-pointer hover:text-black font-base"
                onClick={() => goToLevel(index)}
              >
                {folder.name}
              </span>

            </span>
          ))}

        </div>
        <div>
          {pathStack.length > 0 && (<button onClick={goBack} className="mb-4 bg-gray-100 rounded-md p-2 px-5 shadow-md hover:shadow-xl transition cursor-pointer">НАЗАД</button>)}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
            {/* {history.length > 0 && (<button onClick={goBack} className="bg-white rounded-xl border-1 border-gray-200 p-2 py-6.5 shadow-md hover:shadow-xl transition cursor-pointer flex flex-col justify-center items-center"><img src={back} alt="back" /></button>)} */}
            {sortedItems.map(item => (
              <TemplateItem
                key={item.path || item.name}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Templates