import React from "react";
import ItemList from "../components/ItemList";

import Alert from 'react-bootstrap/Alert';

function Feed() {
   return (
      <div className="feed-content">
        <Alert show={true} variant="success" >
            <Alert.Heading>FEED (PROTECTED)</Alert.Heading>
            <p>
                Lorem ipsum.
            </p>
        </Alert>
        <hr />
        <ItemList></ItemList>
      </div>
   );
}

export default Feed;
