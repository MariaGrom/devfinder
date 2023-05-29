// хелпер по приведению пришедших данных github к локальному типу пользователя 
// с нужными нам ключами
import {GithubUser, LocalGithubUser} from 'types';

export const extractLocalUser = (user: GithubUser) : LocalGithubUser => ({
  login: user.login,
  id: user.id,
  avatar: user.avatar_url,
  name: user.name,
  bio: user.bio,
  blog: user.blog,
  company: user.company,
  created: user.created_at,
  location: user.location,
  twitter: user.twitter_username,
  repos: user.public_repos,
  followers: user.followers,
  following: user.following,
})