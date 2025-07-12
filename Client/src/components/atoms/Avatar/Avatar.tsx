import * as s from './Avatar.module.scss'
import Img from "@/shared/Img/Img";
import DefaultAvatar from "@/asset/images/svgicons/Avatar/avatar-svgrepo-com.svg";

// Type
interface Props {
 avatarImage?: string;
}

// Avatar
const Avatar: React.FC<Props> = (props) => {
  const {avatarImage} = props

  return (
    <div className={s.Avatar}>
      {
        avatarImage
          ? <Img srcJpg={avatarImage} loading="lazy" />
          : <DefaultAvatar className={s.DefaultAvatar} />
      }
    </div>
  );
}

export default Avatar