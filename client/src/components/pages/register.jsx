import React, { useEffect, useState } from 'react'
import Button from '../ui/button'
import { validator } from '../../utils/validator'
import { useNavigate } from 'react-router-dom'
import InputItem from '../ui/inputItem'
import { useDispatch } from 'react-redux'
import { signUp } from '../../store/users'
import Avatar from 'avataaars'
// import localforage from 'localforage'

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [data, setData] = useState({
    email: '',
    password: '',
    sex: 'female',
    image: `<img src='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
    />`,
    name: '',
    userRule: 'user',
    surname: '',
    avatarSettings: {
      avatarStyle: 'Transparent',
      topType: 'LongHairStraight',
      accessoriesType: 'Blank',
      hairColor: 'BrownDark',
      facialHairType: 'Blank',
      clotheType: 'BlazerShirt',
      eyeType: 'Default',
      eyebrowType: 'Default',
      mouthType: 'Smile',
      skinColor: 'Light'
    },
    birthday: ''
  })
  const [avatar, setAvatar] = useState({
    avatarStyle: 'Transparent',
    topType: 'LongHairStraight',
    accessoriesType: 'Blank',
    hairColor: 'BrownDark',
    facialHairType: 'Blank',
    clotheType: 'BlazerShirt',
    eyeType: 'Default',
    eyebrowType: 'Default',
    mouthType: 'Smile',
    skinColor: 'Light'
  })
  const [errors, setErrors] = useState({})

  const validatorConfig = {
    email: {
      isRequired: {
        message: 'Электронная почта обязательна для заполнения'
      },
      isEmail: {
        message: 'Email введен некорректно'
      }
    },
    name: {
      isRequired: {
        message: 'Имя обязательно для заполнения'
      },
      min: {
        message: 'Имя должено состаять миниму из 3 символов',
        value: 3
      }
    },
    surname: {
      isRequired: {
        message: 'Фамилия обязательна для заполнения'
      }
    },
    password: {
      isRequired: {
        message: 'Пароль обязателен для заполнения'
      },
      isCapitalSymbol: {
        message: 'Пароль должен содержать хотя бы одну заглавную букву'
      },
      isContainDigit: {
        message: 'Пароль должен содержать хотя бы одно число'
      },
      min: {
        message: 'Пароль должен состаять миниму из 8 символов',
        value: 8
      }
    }
  }

  const getAvatar = (avatar) => {
    return (
      <Avatar
        className="avatar"
        avatarStyle={avatar.avatarStyle}
        topType={avatar.topType}
        accessoriesType={avatar.accessoriesType}
        hairColor={avatar.hairColor}
        facialHairType={avatar.facialHairType}
        clotheType={avatar.clotheType}
        eyeType={avatar.eyeType}
        eyebrowType={avatar.eyebrowType}
        mouthType={avatar.mouthType}
        skinColor={avatar.skinColor}
      />
    )
  }

  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const isValid = Object.keys(errors).length === 0

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    const dateNow = new Date().valueOf()
    dispatch(signUp({ ...data, userId: dateNow }))
    navigate('/')
  }

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  const handleSelectChange = ({ target }) => {
    const indexTarget = target.options.selectedIndex
    const TextTarget = target.options[indexTarget].value
    setData((prevState) => ({
      ...prevState,
      [target.name]: TextTarget
    }))
  }

  const handleAvatarChange = ({ target }) => {
    const indexTarget = target.options.selectedIndex
    const valueTarget = target.options[indexTarget].value
    const newAvatar = {
      ...avatar,
      [target.name]: valueTarget
    }
    setAvatar(newAvatar)
    getAvatar(newAvatar)
    const avatarImage = `<img src='https://avataaars.io/?avatarStyle=${newAvatar.avatarStyle}&topType=${newAvatar.topType}&accessoriesType=${newAvatar.accessoriesType}&hairColor=${newAvatar.hairColor}&facialHairType=${newAvatar.facialHairType}&clotheType=${newAvatar.clotheType}&eyeType=${newAvatar.eyeType}&eyebrowType=${newAvatar.eyebrowType}&mouthType=${newAvatar.mouthType}&skinColor=${newAvatar.skinColor}'/>`
    const avatarNewSettings = {
      avatarStyle: newAvatar.avatarStyle,
      topType: newAvatar.topType,
      accessoriesType: newAvatar.accessoriesType,
      hairColor: newAvatar.hairColor,
      facialHairType: newAvatar.facialHairType,
      clotheType: newAvatar.clotheType,
      eyeType: newAvatar.eyeType,
      eyebrowType: newAvatar.eyebrowType,
      mouthType: newAvatar.mouthType,
      skinColor: newAvatar.skinColor
    }
    setData((prevState) => ({
      ...prevState,
      image: avatarImage,
      avatarSettings: avatarNewSettings
    }))
  }

  return (
    <main className="main">
      <div className="container">
        <form className="form-edit" onSubmit={handleSubmit}>
          <label className="form-edit__label">
            <InputItem
              classes="form-edit__input"
              name="name"
              onChange={handleChange}
              type="text"
              error={errors.name}
            />
            <span className="form-edit__span">Имя</span>
          </label>

          <label className="form-edit__label">
            <InputItem
              classes="form-edit__input"
              name="surname"
              onChange={handleChange}
              type="text"
              error={errors.surname}
            />
            <span className="form-edit__span">Фамилия</span>
          </label>

          <label className="form-edit__label">
            <InputItem
              classes="form-edit__input"
              name="birthday"
              onChange={handleChange}
              type="date"
            />
            <span className="form-edit__span">День Рождения</span>
          </label>

          <label className="form-edit__label">
            <InputItem
              classes="form-edit__input"
              name="email"
              type="email"
              onChange={handleChange}
              error={errors.email}
            />
            <span className="form-edit__span">E-mail</span>
          </label>

          <label className="form-edit__label">
            <InputItem
              classes="form-edit__input"
              name="password"
              onChange={handleChange}
              type="password"
              error={errors.password}
            />
            <span className="form-edit__span">Пароль</span>
          </label>

          <label className="form-edit__label">
            <select className='form-edit__select' name="sex" id="sexSelect" onChange={handleSelectChange}>
              <option className="create-song__option" value="">
                Выберите пол
              </option>
              <option value="male">мужской</option>
              <option value="female">женский</option>
            </select>
            <span className="form-edit__span">Пол</span>
          </label>

          <div className="avatar-form">
            {getAvatar(avatar)}
            <div className="avatar-form__content">
              <div className="avatar-form__group">
                <label className="avatar-form__label" htmlFor="topType">
                  На голове
                </label>
                <div className="">
                  <select
                    onChange={handleAvatarChange}
                    id="topType"
                    name="topType"
                    className="form-control"
                    defaultValue={avatar.topType}
                  >
                    <option value="NoHair">NoHair</option>
                    <option value="Eyepatch">Eyepatch</option>
                    <option value="Hat">Hat</option>
                    <option value="Hijab">Hijab</option>
                    <option value="Turban">Turban</option>
                    <option value="WinterHat1">WinterHat1</option>
                    <option value="WinterHat2">WinterHat2</option>
                    <option value="WinterHat3">WinterHat3</option>
                    <option value="WinterHat4">WinterHat4</option>
                    <option value="LongHairBigHair">LongHairBigHair</option>
                    <option value="LongHairBob">LongHairBob</option>
                    <option value="LongHairBun">LongHairBun</option>
                    <option value="LongHairCurly">LongHairCurly</option>
                    <option value="LongHairCurvy">LongHairCurvy</option>
                    <option value="LongHairDreads">LongHairDreads</option>
                    <option value="LongHairFrida">LongHairFrida</option>
                    <option value="LongHairFro">LongHairFro</option>
                    <option value="LongHairFroBand">LongHairFroBand</option>
                    <option value="LongHairNotTooLong">
                      LongHairNotTooLong
                    </option>
                    <option value="LongHairShavedSides">
                      LongHairShavedSides
                    </option>
                    <option value="LongHairMiaWallace">
                      LongHairMiaWallace
                    </option>
                    <option value="LongHairStraight">LongHairStraight</option>
                    <option value="LongHairStraight2">LongHairStraight2</option>
                    <option value="LongHairStraightStrand">
                      LongHairStraightStrand
                    </option>
                    <option value="ShortHairDreads01">ShortHairDreads01</option>
                    <option value="ShortHairDreads02">ShortHairDreads02</option>
                    <option value="ShortHairFrizzle">ShortHairFrizzle</option>
                    <option value="ShortHairShaggyMullet">
                      ShortHairShaggyMullet
                    </option>
                    <option value="ShortHairShortCurly">
                      ShortHairShortCurly
                    </option>
                    <option value="ShortHairShortFlat">
                      ShortHairShortFlat
                    </option>
                    <option value="ShortHairShortRound">
                      ShortHairShortRound
                    </option>
                    <option value="ShortHairShortWaved">
                      ShortHairShortWaved
                    </option>
                    <option value="ShortHairSides">ShortHairSides</option>
                    <option value="ShortHairTheCaesar">
                      ShortHairTheCaesar
                    </option>
                    <option value="ShortHairTheCaesarSidePart">
                      ShortHairTheCaesarSidePart
                    </option>
                  </select>
                </div>
              </div>
              <div className="avatar-form__group">
                <label className="avatar-form__label" htmlFor="accessoriesType">
                  Аксессуары
                </label>
                <div className="">
                  <select
                    onChange={handleAvatarChange}
                    id="accessoriesType"
                    name="accessoriesType"
                    className="form-control"
                    defaultValue={avatar.accessoriesType}
                  >
                    <option value="Blank">Blank</option>
                    <option value="Kurt">Kurt</option>
                    <option value="Prescription01">Prescription01</option>
                    <option value="Prescription02">Prescription02</option>
                    <option value="Round">Round</option>
                    <option value="Sunglasses">Sunglasses</option>
                    <option value="Wayfarers">Wayfarers</option>
                  </select>
                </div>
              </div>
              <div className="avatar-form__group">
                <label className="avatar-form__label" htmlFor="hairColor">
                  Цвет волос
                </label>
                <div className="">
                  <select
                    onChange={handleAvatarChange}
                    id="hairColor"
                    className="form-control"
                    name="hairColor"
                    defaultValue={avatar.hairColor}
                  >
                    <option value="Auburn">Auburn</option>
                    <option value="Black">Black</option>
                    <option value="Blonde">Blonde</option>
                    <option value="BlondeGolden">BlondeGolden</option>
                    <option value="Brown">Brown</option>
                    <option value="BrownDark">BrownDark</option>
                    <option value="PastelPink">PastelPink</option>
                    <option value="Blue">Blue</option>
                    <option value="Platinum">Platinum</option>
                    <option value="Red">Red</option>
                    <option value="SilverGray">SilverGray</option>
                  </select>
                </div>
              </div>
              <div className="avatar-form__group">
                <label className="avatar-form__label" htmlFor="facialHairType">
                  Борода/Усы
                </label>
                <div className="">
                  <select
                    onChange={handleAvatarChange}
                    id="facialHairType"
                    className="form-control"
                    name="facialHairType"
                    defaultValue={avatar.facialHairType}
                  >
                    <option value="Blank">Blank</option>
                    <option value="BeardMedium">BeardMedium</option>
                    <option value="BeardLight">BeardLight</option>
                    <option value="BeardMajestic">BeardMajestic</option>
                    <option value="MoustacheFancy">MoustacheFancy</option>
                    <option value="MoustacheMagnum">MoustacheMagnum</option>
                  </select>
                </div>
              </div>
              <div className="avatar-form__group">
                <label className="avatar-form__label" htmlFor="clotheType">
                  Одежда
                </label>
                <div className="">
                  <select
                    onChange={handleAvatarChange}
                    id="clotheType"
                    className="form-control"
                    name="clotheType"
                    defaultValue={avatar.clotheType}
                  >
                    <option value="BlazerShirt">BlazerShirt</option>
                    <option value="BlazerSweater">BlazerSweater</option>
                    <option value="CollarSweater">CollarSweater</option>
                    <option value="GraphicShirt">GraphicShirt</option>
                    <option value="Hoodie">Hoodie</option>
                    <option value="Overall">Overall</option>
                    <option value="ShirtCrewNeck">ShirtCrewNeck</option>
                    <option value="ShirtScoopNeck">ShirtScoopNeck</option>
                    <option value="ShirtVNeck">ShirtVNeck</option>
                  </select>
                </div>
              </div>
              <div className="avatar-form__group">
                <label className="avatar-form__label" htmlFor="eyeType">
                  Глаза
                </label>
                <div className="">
                  <select
                    onChange={handleAvatarChange}
                    id="eyeType"
                    className="form-control"
                    name="eyeType"
                    defaultValue={avatar.eyeType}
                  >
                    <option value="Close">Close</option>
                    <option value="Cry">Cry</option>
                    <option value="Default">Default</option>
                    <option value="Dizzy">Dizzy</option>
                    <option value="EyeRoll">EyeRoll</option>
                    <option value="Happy">Happy</option>
                    <option value="Hearts">Hearts</option>
                    <option value="Side">Side</option>
                    <option value="Squint">Squint</option>
                    <option value="Surprised">Surprised</option>
                    <option value="Wink">Wink</option>
                    <option value="WinkWacky">WinkWacky</option>
                  </select>
                </div>
              </div>
              <div className="avatar-form__group">
                <label className="avatar-form__label" htmlFor="eyebrowType">
                  Брови
                </label>
                <div className="">
                  <select
                    onChange={handleAvatarChange}
                    name="eyebrowType"
                    id="eyebrowType"
                    className="form-control"
                    defaultValue={avatar.eyebrowType}
                  >
                    <option value="Angry">Angry</option>
                    <option value="AngryNatural">AngryNatural</option>
                    <option value="Default">Default</option>
                    <option value="DefaultNatural">DefaultNatural</option>
                    <option value="FlatNatural">FlatNatural</option>
                    <option value="RaisedExcited">RaisedExcited</option>
                    <option value="RaisedExcitedNatural">
                      RaisedExcitedNatural
                    </option>
                    <option value="SadConcerned">SadConcerned</option>
                    <option value="SadConcernedNatural">
                      SadConcernedNatural
                    </option>
                    <option value="UnibrowNatural">UnibrowNatural</option>
                    <option value="UpDown">UpDown</option>
                    <option value="UpDownNatural">UpDownNatural</option>
                  </select>
                </div>
              </div>
              <div className="avatar-form__group">
                <label className="avatar-form__label" htmlFor="mouthType">
                  Рот
                </label>
                <div className="">
                  <select
                    onChange={handleAvatarChange}
                    id="mouthType"
                    className="form-control"
                    name="mouthType"
                    defaultValue={avatar.mouthType}
                  >
                    <option value="Concerned">Concerned</option>
                    <option value="Default">Default</option>
                    <option value="Disbelief">Disbelief</option>
                    <option value="Eating">Eating</option>
                    <option value="Grimace">Grimace</option>
                    <option value="Sad">Sad</option>
                    <option value="ScreamOpen">ScreamOpen</option>
                    <option value="Serious">Serious</option>
                    <option value="Smile">Smile</option>
                    <option value="Tongue">Tongue</option>
                    <option value="Twinkle">Twinkle</option>
                    <option value="Vomit">Vomit</option>
                  </select>
                </div>
              </div>
              <div className="avatar-form__group">
                <label className="avatar-form__label" htmlFor="skinColor">
                  Кожа
                </label>
                <div className="">
                  <select
                    onChange={handleAvatarChange}
                    id="skinColor"
                    className="form-control"
                    name="skinColor"
                    defaultValue={avatar.skinColor}
                  >
                    <option value="Tanned">Tanned</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Pale">Pale</option>
                    <option value="Light">Light</option>
                    <option value="Brown">Brown</option>
                    <option value="DarkBrown">DarkBrown</option>
                    <option value="Black">Black</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <Button
            classes=""
            disabled={!isValid}
            title="Зарегистрироваться"
            type="submit"
          />
        </form>
      </div>
    </main>
  )
}

export default Register
