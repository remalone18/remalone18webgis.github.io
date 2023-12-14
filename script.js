require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
  const webmap = new WebMap({
    portalItem: {
      id: "124bce6fe3f149b2b57e2470aa1ac5c8"
    }
  });
// Minnesota Bedrock Mosaic Map from the MN Geologic Survey // 
  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
});