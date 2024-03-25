import { intro, outro,text,confirm,select} from '@clack/prompts';



// intro & outro : plain text
intro(`create-my-app`);

// prompt
const meaning = await text({
  message: 'What is the meaning of life?',
  placeholder: 'Not sure',
  initialValue: '42',
  validate(value) {
    if (value.length === 0) return `Value is required!`;
  },
});

// Boolean
const shouldContinue = await confirm({
  message: 'Do you want to continue?',
});

// Select 

const projectType = await select({
  message: 'Pick a project type.',
  options: [
    { value: 'ts', label: 'TypeScript' },
    { value: 'js', label: 'JavaScript' },
    { value: 'coffee', label: 'CoffeeScript', hint: 'oh no' },
  ],
});

outro("Thank You :)");