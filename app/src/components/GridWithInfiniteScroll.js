"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Grid_1 = require("@mui/material/Grid");
var Box_1 = require("@mui/material/Box");
var Container_1 = require("@mui/material/Container");
var Typography_1 = require("@mui/material/Typography");
var VideoItemWithHover_1 = require("./VideoItemWithHover");
var useIntersectionObserver_1 = require("src/hooks/useIntersectionObserver");
function GridWithInfiniteScroll(_a) {
    var genre = _a.genre, data = _a.data, handleNext = _a.handleNext;
    var intersectionRef = (0, react_1.useRef)(null);
    var intersection = (0, useIntersectionObserver_1["default"])(intersectionRef);
    (0, react_1.useEffect)(function () {
        if (intersection &&
            intersection.intersectionRatio === 1 &&
            data.page < data.total_pages) {
            handleNext(data.page + 1);
        }
    }, [intersection]);
    return (<>
      <Container_1["default"] maxWidth={false} sx={{
            px: { xs: "30px", sm: "60px" },
            pb: 4,
            pt: "150px",
            bgcolor: "inherit"
        }}>
        <Typography_1["default"] variant="h5" sx={{ color: "text.primary", mb: 2 }}>{"".concat(genre.name, " Movies")}</Typography_1["default"]>
        <Grid_1["default"] container spacing={2}>
          {data.results
            .filter(function (v) { return !!v.backdrop_path; })
            .map(function (video, idx) { return (<Grid_1["default"] key={"".concat(video.id, "_").concat(idx)} item xs={6} sm={3} md={2} sx={{ zIndex: 1 }}>
                <VideoItemWithHover_1["default"] video={video}/>
              </Grid_1["default"]>); })}
        </Grid_1["default"]>
      </Container_1["default"]>
      <Box_1["default"] sx={{ display: "hidden" }} ref={intersectionRef}/>
    </>);
}
exports["default"] = GridWithInfiniteScroll;
