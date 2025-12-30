import React, { useState } from "react";

// 定義型別
interface Bird {
  name: string;
  info: string;
  image: string;
}

function MyHook() {
  const birds: Bird[] = [
    { 
      name: "麻雀", 
      info: "是麻雀屬下的一種鳥類，廣泛分佈於古北界的溫帶地區和東南亞，英文稱為樹麻雀（英語：tree sparrow）。本種也被引入其他地區，包括美國，在那裡它被稱為歐亞樹麻雀（英語：Eurasian tree sparrow）或德國麻雀（英語：German sparrow），以區別於美國本土的美洲樹麻雀，兩者實際上並無關聯。儘管已有多個亞種被認可，但這種鳥在其廣泛的分佈區域中外觀變化不大。",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Passer_montanus_malaccensis_%40_Kuala_Lumpur%2C_Malaysia_%281%29.jpg/1280px-Passer_montanus_malaccensis_%40_Kuala_Lumpur%2C_Malaysia_%281%29.jpg" 
    },
    { 
      name: "翠鳥", 
      info: "翠鳥（學名：Alcedo atthis，中國大陸、香港稱普通翠鳥，英語：Common kingfisher、Eurasian kingfisher、River kingfisher），又稱鴗、魚狗[註 1]、魚獅、魚虎、翡翠鳥、釣魚翁[註 2]，是佛法僧目翠鳥科翠鳥屬下的其中一種鳥類。[3]這個物種由瑞典博物學家卡爾·林奈於1758年命名，分佈於歐亞非三塊大陸上的水域邊，主要以魚類為食。[4][5][6][7]目前翠鳥共有7個亞種，是世界上最小，也是最為人所知的翠鳥科成員之一。",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Alcedo_Atthis.jpg/500px-Alcedo_Atthis.jpg" 
    },
    { 
      name: "貓頭鷹", 
      info: "貓頭鷹，是鴞形目（學名：Strigiformes）的鳥類。鴞形目是鳥綱中的目。眼睛大、嘴短而粗壯前端成鉤狀。相對於頭部碩大的雙目均向前是本目鳥類共有且區別於其他鳥類的特徵，頭部正面的羽毛排列成面盤，部分種類具有耳狀羽毛。鴞形目在除南極洲以外所有的大洲都有分布，其中大部分物種為夜行性肉食性猛禽。",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Strix_aluco_aluco.jpg/960px-Strix_aluco_aluco.jpg" 
    }
  ];

  const [selected, setSelected] = useState<Bird | null>(null);

  return (
    <div style={{ 
      backgroundColor: "#e0f7fa", 
      minHeight: "100vh", 
      padding: "20px", 
      fontFamily: "Arial, sans-serif",
      textAlign: "center" 
    }}>
      <h1 style={{ color: "#01579b" }}>鳥類圖鑑</h1>
      
      {/* 按鈕區域 */}
      <div style={{ marginBottom: "20px" }}>
        {birds.map((bird) => (
          <button 
            key={bird.name} 
            onClick={() => setSelected(bird)}
            style={{ 
              margin: "5px", 
              padding: "10px 20px", 
              cursor: "pointer",
              borderRadius: "20px",
              border: "none",
              backgroundColor: selected?.name === bird.name ? "#0288d1" : "#fff",
              color: selected?.name === bird.name ? "#fff" : "#0288d1",
              fontWeight: "bold",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}
          >
            {bird.name}
          </button>
        ))}
      </div>

      {/* 內容區域 */}
      {selected ? (
        <div style={{ 
          backgroundColor: "#fff", 
          padding: "20px", 
          borderRadius: "15px", 
          maxWidth: "400px", 
          margin: "0 auto",
          boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
        }}>
          <img 
            src={selected.image} 
            alt={selected.name} 
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <h2 style={{ color: "#1b8acbff" }}>{selected.name}</h2>
          <p style={{ color: "#555", lineHeight: "1.5" }}>{selected.info}</p>
        </div>
      ) : (
        <p style={{ color: "#01579b", marginTop: "40px" }}></p>
      )}
    </div>
  );
}

export default MyHook;