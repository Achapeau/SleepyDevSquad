import { useEffect, useState, useCallback } from "react";
import Proptypes from "prop-types";

const zoom = 5;

function ResetMap({ map, center }) {
  const [position, setPosition] = useState(() => map.getCenter());

  const onClick = useCallback(() => {
    map.setView(center, zoom);
  }, [map]);

  const onMove = useCallback(() => {
    setPosition(map.getCenter());
  }, [map]);

  useEffect(() => {
    map.on("move", onMove);
    return () => {
      map.off("move", onMove);
    };
  }, [map, onMove]);

  return (
    <p>
      <button
        className="flex m-auto mb-4 justify-center items-center h-8 w-24 rounded-2xl bg-yellow"
        type="button"
        onClick={onClick}
      >
        Recentrum
      </button>
    </p>
  );
}

ResetMap.propTypes = {
  map: Proptypes.string.isRequired,
  center: Proptypes.arrayOf.isRequired,
};

export default ResetMap;
