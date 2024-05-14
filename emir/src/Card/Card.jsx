import React, { useEffect, useState } from "react";
import logo from "../pics/FC_Bayern_München_logo_(2017).svg.png";
import "./card.css";
import davies from "../pics/davies A.webp";
import Pocketbase from "pocketbase";
import { Hectogram } from "./Hectogram";
import { useParams } from "react-router-dom";

const Card = () => {
  const [loading, setLoading] = useState(true);
  const [player, setPlayer] = useState();
  const param = useParams();
  const pb = new Pocketbase("https://tazalyk.fly.dev/");

  const getData = async () => {
    try {
      const result = await pb.collection("footcard_cards").getOne(param.id, {
        expand: "footcard_clubs_id",
      });

      setPlayer(result);
      setLoading(false);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {!loading ? (
        <div>
          <div className={"cardleft"}>
            <div className={"cardinside2"}>
              <img
                src={`https://tazalyk.fly.dev/api/files/footcard_cards/${param.id}/${player.player_card}`}
                alt=""
              />
            </div>
            <h3>{player.name}</h3>
            <p>{player.expand.footcard_clubs_id?.name}</p>

            <div className={"cardinside"}>
              <img src={logo} alt="" />
              <img src={logo} alt="" />
              <img src={logo} alt="" />
            </div>
            <div className="cardtype">
              <div className={"cardinfo"}>
                <h6>Level</h6>
                <h4>Lv.1 / 49</h4>
              </div>
              <div className={"cardinfo"}>
                <h6>Stronger foot</h6>
                <h3>{player.stronger_foot}</h3>
              </div>
              <div className={"cardinfo"}>
                <h6>Weak foot usage</h6>
                <h4>3 / 4</h4>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "white",
              width: "100%",
              borderRadius: "20px",
              padding: "10px",
            }}
          >
            <Hectogram
              stats={{
                labels: [
                  "Pace",
                  "Shooting",
                  "Passing",
                  "Agility",
                  "Defending",
                  "Physical",
                ],
                datasets: [
                  {
                    label: "Player stats",
                    data: [
                      player.pace,
                      player.shooting,
                      player.passing,
                      player.agility,
                      player.defending,
                      player.physical,
                    ],
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    borderWidth: 2,
                  },
                ],
              }}
            />
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default Card;
