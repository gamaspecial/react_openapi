import React from "react";
import { MurmursApi } from "../openapi";
import { useForm, Controller } from "react-hook-form";

import { TextareaAutosize } from "@material-ui/core";

const style = {
  minWidth: "95%",
  maxWidth: "95%",
  margin: 10,
};

const textAreaStyle = {
  minWidth: "100%",
  maxWidth: "100%",
  minHeight: 100,
  maxHeight: 100,
};

type FormValues = {
  text: string
}

export const PostMurmur: React.FC = () => {
  const { handleSubmit, control, reset } = useForm<FormValues>();
  const postMurmur = ((data: FormValues) => {
    new MurmursApi().createMurmur(1, { ...data })
    console.log(data);
    reset();
  })

  return (
    <form
      style={style}
      onSubmit={handleSubmit((data: FormValues) => postMurmur(data))}>
      <Controller
        control={control}
        name="text"
        render={({ field: { onChange, ref } }) => (
          <TextareaAutosize
            ref={ref}
            onChange={onChange}
            style={textAreaStyle}
            aria-label="maximum height"
            placeholder="いまどうしてる？"
          />
        )}
      />
      <div style={{ display: "inline-block", width: "100%", textAlign: "right" }}>
        <input type="submit" value="つぶやく" />
      </div>
    </form>
  );
};
