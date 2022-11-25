import CharacterSlot from './CharacterSlot';
import { IconUserPlus } from '@tabler/icons';
import { useCharactersState } from '../../../state/characters';
import { useNuiEvent } from '../../../hooks/useNuiEvent';
import { CharacterProps } from '../../../types';

export const Sidebar: React.FC = () => {
  const [characters, setCharacters] = useCharactersState();

  useNuiEvent('sendCharacters', (data: { characters: CharacterProps[]; maxSlots: number }) => {
    setCharacters(data.characters);
  });


  return (
    <div className='fixed h-screen w-[300px] bg-gradient-to-r from-black/50 to-transparent'>
      <div className='flex h-full flex-col justify-between font-text'>
        <div>
          {characters.map((character, index) => (
            <CharacterSlot
              character={character}
              index={index}
              key={`${character.firstname}-${character.lastname}-${character.last_played}`}
            />
          ))}
        </div>
        <div
          className='hover-transition mb-10 flex w-full items-center justify-evenly p-3 text-center text-white hover:bg-black/40'>
          <IconUserPlus />
          <p className='text-xl'>Create a character</p>
        </div>
      </div>
    </div>
  )
}
