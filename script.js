const prompt = "agajjar:~>";

document.getElementById("prompt-username").innerText = prompt;

// code to set focus on the input and keep the focus on input
const shell_input_element = document.getElementById("shell-input");
shell_input_element.focus();
shell_input_element.onblur = (e) => {
     setTimeout(() => {
          shell_input_element.focus();
     }, 10);
}

// function to handle shell input
const handle_input = (input) => {
     const outputs_div = document.getElementById("outputs");
     const command_output_container_tag = document.createElement('div');
     const command_input_tag = document.createElement('p');
     command_input_tag.innerText = `${prompt} ${input}`;
     command_output_container_tag.appendChild(command_input_tag)
     const command_output_tag = document.createElement('p');
     command_output_tag.innerText = `You entered command ${input}`;
     command_output_container_tag.appendChild(command_output_tag);
     outputs_div.appendChild(command_output_container_tag);
}

window.onkeydown = (e) => {
     const key_code = e.code || e.key;
     if (key_code == 'Enter') {
          handle_input(shell_input_element.value);
          shell_input_element.value = '';
     }
}