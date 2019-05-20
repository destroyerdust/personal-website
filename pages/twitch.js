import React from "react";
import Layout from "../components/Layout";

const EMBED_URL = "https://embed.twitch.tv/embed/v1.js";

class TwitchPlayer extends React.Component {
  static getInitialProps() {
    const targetID = "twitch-embed";
    const width = "940";
    const height = "480";
    const channel = "monstercat";
    const autoplay = "false";
    return { targetID, width, height, channel, autoplay };
  }
  componentDidMount() {
    let embed;
    const script = document.createElement("script");
    script.setAttribute("src", EMBED_URL);
    script.addEventListener("load", () => {
      embed = new window.Twitch.Embed(this.props.targetID, { ...this.props });
      embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
          var player = embed.getPlayer();
          player.play();
      })
    });
    document.body.appendChild(script);
  }

  render() {
    return (
      <Layout>
        <div className="container">
          <div id={this.props.targetID} />
        </div>
        <style jsx global>{`
          body {
            background-color: #0f0e11;
          }
        `}</style>
      </Layout>
    );
  }
}

export default TwitchPlayer;
