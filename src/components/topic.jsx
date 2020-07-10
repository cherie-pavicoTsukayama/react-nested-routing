import React from 'react';
import {useParams} from 'react-router-dom';

export default function Topics() {
  let { topicId } = useParams();
  if (topicId === 'components') {
    const content = (
      <div>
        <h3> Requested topic ID: {topicId}</h3>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Sociis natoque penatibus
            et magnis dis parturient montes. Et odio pellentesque diam volutpat
            commodo sed egestas.
        </p>
        </div>
      </div>

    )
    return content;
  }
  if (topicId === 'props-v-state') {
    const content = (
      <div>
        <h3> Requested topic ID: {topicId}</h3>
        <div>
          <p>
            Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        </div>
      </div>
    )
    return content;
  }

}
