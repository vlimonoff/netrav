import { Outlet } from "react-router-dom";
import { GraphNavigation } from "../../components/graph-navigation";

export const Graph1 = () => {
  return (
    <iframe
      title='graph1'
      src='/graphs/graph1.html'
      style={{ height: '85vh', width: '100%', border: 'none' }}
    />
  );
};

export const Graph2 = () => {
  return (
    <iframe
      title='graph2'
      src='/graphs/graph2.html'
      style={{ height: '85vh', width: '100%', border: 'none' }}
    />
  );
};

export const Graph3 = () => {
  return (
    <iframe
      title='graph3'
      src='/graphs/graph3.html'
      style={{ height: '85vh', width: '100%', border: 'none' }}
    />
  );
};

export const Graph4 = () => {
  return (
    <iframe
      title='graph4'
      src='/graphs/graph4.html'
      style={{ height: '85vh', width: '100%', border: 'none' }}
    />
  );
};

export const Graphs = () => {  
  return (
    <>
      <GraphNavigation />
      <Outlet />
    </>
  )
}