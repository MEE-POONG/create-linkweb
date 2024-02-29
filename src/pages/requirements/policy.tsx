import React from 'react';
import TitleHead from '@/container/Index/TitleHead';
import ShortenLink from '@/container/All/ShortenLink';
import Tips from '@/container/All/Tip';
import Questions from '@/container/Index/Questions';
import TrialShow from '@/container/All/TrialShow';
import RootLayoutAccount from '@/components/RootLayoutAcc';


const IndexPage: React.FC = () => {
  return (
    <RootLayoutAccount>
      <TitleHead />
      <ShortenLink />
      <TrialShow />
      <Tips />
      <Questions />
    </RootLayoutAccount >
  )
}

export default IndexPage;