import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon} from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
     <ProfileCircle src="https://media-exp1.licdn.com/dms/image/C4D03AQExR4yyvEjkew/profile-displayphoto-shrink_100_100/0?e=1604534400&v=beta&t=dm-1O6esSlfcasfQzkbp7tNUnXSmW5Nou0EXg8d02wc"/>
     <SearchInput placeholder="Pesquisar"/>
     <MessageIcon/>
    </Container>
  );
};

export default MobileHeader;
