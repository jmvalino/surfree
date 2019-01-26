import * as React from 'react';
import { Header as SemanticHeader } from 'semantic-ui-react'

class Header extends React.Component {
  public render() {
    return (
    <>
      <SemanticHeader size='small'>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMXSURBVGhD7ZlNaBNBFMcjil94EKVCS8xuQrwUxYugXhTx4tWjFD2pB0EPXgW/jmKVkOxuiuLXwUP1pBRvUvCggqEKHjx4qBehiCQ7k6RqTNb34mu7bh7Vzu5sIuwP/rSku+//f7uzndlJKiEhQROet8q0xHXQRfrk/yE93tlg2uJh1pZeV5a8ig3RnwebjF3LZW1RWQy/KHHfuOutp8MGk6wjx0xbur3hFyRmco67gw4fHAynakLwJ3zoPwXHSRhS5w9e8tbQ6f0jfau2BcJchivb5MIuLzFjlOpHqFS84Dj//R9GCj7cSgTDqiSPDU94G6l8tOQLnXWZcn0YTA6D4ZWsJd72hohAlpiHizIFP8+YJXdvviCGRie9tRRDHdYsRlEMdeCq/OAKxyHw/k4x1IFxXuOKxyH0phjqwEM2yxWPR2KWYqgDV+E1X1x6Y0/nvXdf296nRkdJeC7W4Gqj0JtiqAMTzyOuOKryRS380KnprvB3rMHVRkEDjymGOrAoG+eKo4LB/lX+BlBcbRR436AY6sAdOMcVR/lDhRFXG4XeFEMdsyQOcMVRCwFOTjWV9LcGDEseohjq4BQPt7LFGehtQLRHS3ObKEY4oIE3nInOBsDzPdmHBwo6QQOU3gbkHbIPj2nXj3MmehsQp8k+PDlbboNV4s+gic4GchPNDNlHA9zSF0ETfQ2ICtlGB8yKZ4NG2hqwxAWyjY6RorsVxuU3v5GeBkQ7X2ikyTZaoIGlvR6Q6lrIr961kHhGdtGTKzf2+M10rEa1v+jjFfIbRimcMMlGH0bZ3Q8PWYcLEFaGI46SjV6ggQdcgHASz6m8froTmy2rvSHUBEOnBTV3Uvl4MK36CS6MknD3uh/A7HybDbQyTacmvdVUMl7wXQGeB+WdOtMSc9uLjREq1x9wCxCGwAcu4HLCPZ9sUe6iMv0Fp34I9JELysoSDcN299HpgwEOBQj3qidsUJb4jJu3dNpggV8hQcB7bHAQzrTaFmpRgm9w+ID6grfgObmm7TsAHRg3q5shvAPBX5pOfTd9nJCQECmp1C8It+taHJ9skwAAAABJRU5ErkJggg=="/>Surfree 
      </SemanticHeader>
       
      </>
    );
  }
}

export default Header;
