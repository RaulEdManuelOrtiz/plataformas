import FacebookLogo from '../../media/icons/FacebookLogo';
import GoogleLogo from '../../media/icons/GoogleLogo';
import GithubLogo from '../../media/icons/GithubLogo';

export const types = (navigation: any) => ({
  facebook: {
    icon: <FacebookLogo />,
    text: 'Iniciar sesión con Facebook',
    onClick: () => navigation.navigate('Root'),
  },
  google: {
    icon: <GoogleLogo />,
    text: 'Iniciar sesión con Google',
    onClick: () => navigation.navigate('Root'),
  },
  github: {
    icon: <GithubLogo />,
    text: 'Iniciar sesión con Github',
    onClick: () => navigation.navigate('Root'),
  },
});

export default {};
