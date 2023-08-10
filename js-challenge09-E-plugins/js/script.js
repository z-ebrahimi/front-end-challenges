alertify
  .dialog("confirm")
  .set({ transition: "flipy", message: "Transition effect: flipy" })
  .show();

/*
//get the closable setting value.
var closable = alertify.alert().setting("closable");
//grab the dialog instance using its parameter-less constructor then set multiple settings at once.
alertify
  .alert()
  .setting({
    label: "Agree",
    message: "This dialog is : " + (closable ? " " : " not ") + "closable.",
    onok: function () {
      alertify.success("Great");
    },
  })
  .show();
  */
