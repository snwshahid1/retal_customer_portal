import { FC, memo } from "react"
import PageTitle from "src/components/PageTitle"
import { ProfileProgressWrapper } from "../style"


const ProfileProgress: FC<any> = ( {title, subtitle, progress} ) => {
  return (
    <ProfileProgressWrapper>
      <PageTitle title={title} subtitle={subtitle} />
      <span className="progress-bar">
        <span className="actual-progress" style={{width: `${progress}%`}}></span>
      </span>
    </ProfileProgressWrapper>
  );
};

export default memo(ProfileProgress);
