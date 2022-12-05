function writeToConsole(message)
{
 if (typeof console != 'undefined') {
  console.log(message);
 }
}

function onChange(executionContext) {
 var formContext = executionContext.getFormContext();
 var sealer = formContext.getAttribute("ya_sealer");
 if (sealer) {
  writeToConsole(sealer);
  if(sealer.getValue().length > 0) {
   writeToConsole(sealer.getValue());
   formContext.getControl("ya_documentfile").setDisabled(true);
  }
 }
}
