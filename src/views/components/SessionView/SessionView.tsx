import React, {useCallback} from 'react';
import css from './SessionView.module.scss';
import {Session} from "@constants/types";
import {setSession} from "@store/slices/sessionSlice";
import {useDispatch} from "react-redux";

interface SessionViewProps {
  session: Session;
}

const SessionView: React.FC<SessionViewProps> = ({ session }) => {
  const dispatch = useDispatch();
  const onSessionClick = useCallback(() => {
    dispatch(setSession(session));
  }, [session]);
  const { title, speaker } = session;
  return (
    <div className={css.SessionView}>
      <div className={css.iconContainer}>
        <div className={css.circle}/>
      </div>
      <div className={css.infoContainer}>
        <h4 className={css.title}>
          {title}
        </h4>
        <p className={css.detail}>{speaker.name} | {speaker.company} {speaker.role}</p>
        <div className={css.buttonContainer}>
          <button onClick={onSessionClick}>자세히 보기</button>
          <button className={css.video}>보러가기</button>
        </div>
      </div>
    </div>
  );
}

export default SessionView;