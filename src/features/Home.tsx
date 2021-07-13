import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Title } from '../components/Title';
import { PostMurmur } from '../components/PostMurmur';
import { MurmurList } from '../components/MurmurList';

const style = { maxWidth: 600 };

interface Props extends RouteComponentProps {}
export const Home = ({ match, history, location }: Props) => {

  console.log(match);
  console.log(history);
  console.log(location);

  return (
    <div style={style}>
      {/* <Link to="/page1">Page 1</Link>
      <Link to="/page2">Page 2</Link> */}
      <Title message="つぶやき" />
      <PostMurmur />
      <MurmurList userId={1} />
    </div>
  );
};
