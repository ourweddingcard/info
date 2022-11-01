import { FullscreenControl, Map as YMap, Placemark } from "react-yandex-maps";

const Map = ({ title, subtitle, center }) => (
  <div style={{ width: "100%" }}>
    <div className="title">{title}</div>
    <div className="subtitle">{subtitle}</div>
    <YMap
      defaultState={{
        center,
        zoom: 15,
      }}
      width="100%"
    >
      <Placemark geometry={center} />
      <FullscreenControl />
    </YMap>
  </div>
);

export default Map;
