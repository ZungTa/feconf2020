import React, {useCallback} from 'react';
import RegisterButton from "@components/RegisterButton/RegisterButton";
import {setSupportForm} from "@store/slices/supportSlice";
import {useDispatch} from "react-redux";
import {useSupportState} from "@store/index";
import {useFirebase} from "@utils/hooks/use-firebase";

interface RegisterSupportButtonProps {}

const RegisterSupportButton: React.FC<RegisterSupportButtonProps> = React.memo(() => {
  const dispatch = useDispatch();
  const { fireStoreRef } = useFirebase();
  const { currentUser } = useSupportState();
  const onRegister = useCallback((evt) => {
    evt.preventDefault();
    if (currentUser) {
      dispatch(setSupportForm(true));
    } else {
      fireStoreRef.current.fireStore?.signIn();
    }
  }, [currentUser]);
  return (
    <RegisterButton onClick={onRegister}>
      사전 등록하기
    </RegisterButton>
  );
});

export default RegisterSupportButton;
