import React, { Component } from 'react';
import { Definition } from './../definitions';

export class SerialInfo extends Component {
  render() {
    return (
      <Definition>
        <h1>{location.pathname}</h1><br/>
          <strong>In television and radio programming, a serial</strong> has a continuing plot that unfolds in a sequential episode-by-episode fashion. Serials typically follow main story arcs that span entire television seasons or even the full run of the series, which distinguishes them from traditional episodic television that relies on more stand-alone episodes. Worldwide, the soap opera is the most prominent form of serial dramatic programming.<br/><br/>
        Source: n.wikipedia.org/wiki/Serial_(radio_and_television)<br/><br/>
      </Definition>
    );
  }
}
