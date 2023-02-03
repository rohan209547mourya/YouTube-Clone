import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
import { Navbar, Feed, VideoDetails, ChannelDetails, SearchFeed } from "./components"

function App() {

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/watch/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:searchQuery" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
