import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private metadatas = [
    {
      name: 'Common 1',
      description: 'Common Breed',
      external_link:
        'ipfs://QmQR1c3VoLs9xHnL5kwzj23RCdfWmKw1QJN6jBBCrbouuB/Common1.png',
      image:
        'ipfs://QmQR1c3VoLs9xHnL5kwzj23RCdfWmKw1QJN6jBBCrbouuB/Common1.png',
      attributes: [
        {
          trait_type: 'Base',
          value: 'Common',
        },
        {
          trait_type: 'Stamina',
          value: 10,
        },
        {
          display_type: 'number',
          trait_type: 'Generation',
          value: 1,
        },
      ],
    },
    {
      name: 'Common 2',
      description: 'Common Breed',
      external_link:
        'ipfs://QmQR1c3VoLs9xHnL5kwzj23RCdfWmKw1QJN6jBBCrbouuB/Common2.png',
      image:
        'ipfs://QmQR1c3VoLs9xHnL5kwzj23RCdfWmKw1QJN6jBBCrbouuB/Common2.png',
      attributes: [
        {
          trait_type: 'Base',
          value: 'Common',
        },
        {
          trait_type: 'Stamina',
          value: 10,
        },
        {
          display_type: 'number',
          trait_type: 'Generation',
          value: 1,
        },
      ],
    },
    {
      name: 'Common 3',
      description: 'Common Breed',
      external_link:
        'ipfs://QmQR1c3VoLs9xHnL5kwzj23RCdfWmKw1QJN6jBBCrbouuB/Common3.png',
      image:
        'ipfs://QmQR1c3VoLs9xHnL5kwzj23RCdfWmKw1QJN6jBBCrbouuB/Common3.png',
      attributes: [
        {
          trait_type: 'Base',
          value: 'Common',
        },
        {
          trait_type: 'Stamina',
          value: 10,
        },
        {
          display_type: 'number',
          trait_type: 'Generation',
          value: 1,
        },
      ],
    },
    {
      name: 'Common 4',
      description: 'Common Breed',
      external_link:
        'ipfs://QmQR1c3VoLs9xHnL5kwzj23RCdfWmKw1QJN6jBBCrbouuB/Common4.png',
      image:
        'ipfs://QmQR1c3VoLs9xHnL5kwzj23RCdfWmKw1QJN6jBBCrbouuB/Common4.png',
      attributes: [
        {
          trait_type: 'Base',
          value: 'Common',
        },
        {
          trait_type: 'Stamina',
          value: 10,
        },
        {
          display_type: 'number',
          trait_type: 'Generation',
          value: 1,
        },
      ],
    },
    {
      name: 'Rare 1',
      description: 'Rare Breed',
      external_link:
        'ipfs://QmQR1c3VoLs9xHnL5kwzj23RCdfWmKw1QJN6jBBCrbouuB/Rare1.png',
      image: 'ipfs://QmQR1c3VoLs9xHnL5kwzj23RCdfWmKw1QJN6jBBCrbouuB/Rare1.png',
      attributes: [
        {
          trait_type: 'Base',
          value: 'Rare',
        },
        {
          trait_type: 'Stamina',
          value: 20,
        },
        {
          display_type: 'number',
          trait_type: 'Generation',
          value: 2,
        },
      ],
    },
    {
      name: 'Rare 2',
      description: 'Rare Breed',
      external_link:
        'ipfs://QmQR1c3VoLs9xHnL5kwzj23RCdfWmKw1QJN6jBBCrbouuB/Rare2.png',
      image: 'ipfs://QmQR1c3VoLs9xHnL5kwzj23RCdfWmKw1QJN6jBBCrbouuB/Rare2.png',
      attributes: [
        {
          trait_type: 'Base',
          value: 'Rare',
        },
        {
          trait_type: 'Stamina',
          value: 20,
        },
        {
          display_type: 'number',
          trait_type: 'Generation',
          value: 2,
        },
      ],
    },
    {
      name: 'Rare 3',
      description: 'Rare Breed',
      external_link:
        'ipfs://QmQR1c3VoLs9xHnL5kwzj23RCdfWmKw1QJN6jBBCrbouuB/Rare3.png',
      image: 'ipfs://QmQR1c3VoLs9xHnL5kwzj23RCdfWmKw1QJN6jBBCrbouuB/Rare3.png',
      attributes: [
        {
          trait_type: 'Base',
          value: 'Rare',
        },
        {
          trait_type: 'Stamina',
          value: 20,
        },
        {
          display_type: 'number',
          trait_type: 'Generation',
          value: 2,
        },
      ],
    },
    {
      name: 'Epic 1',
      description: 'Epic Breed',
      external_link:
        'ipfs://QmQR1c3VoLs9xHnL5kwzj23RCdfWmKw1QJN6jBBCrbouuB/Epic1.png',
      image: 'ipfs://QmQR1c3VoLs9xHnL5kwzj23RCdfWmKw1QJN6jBBCrbouuB/Epic1.png',
      attributes: [
        {
          trait_type: 'Base',
          value: 'Epic',
        },
        {
          trait_type: 'Stamina',
          value: 30,
        },
        {
          display_type: 'number',
          trait_type: 'Generation',
          value: 3,
        },
      ],
    },
    {
      name: 'Epic 2',
      description: 'Epic Breed',
      external_link:
        'ipfs://QmQR1c3VoLs9xHnL5kwzj23RCdfWmKw1QJN6jBBCrbouuB/Epic2.png',
      image: 'ipfs://QmQR1c3VoLs9xHnL5kwzj23RCdfWmKw1QJN6jBBCrbouuB/Epic2.png',
      attributes: [
        {
          trait_type: 'Base',
          value: 'Epic',
        },
        {
          trait_type: 'Stamina',
          value: 30,
        },
        {
          display_type: 'number',
          trait_type: 'Generation',
          value: 3,
        },
      ],
    },
    {
      name: 'Legendary',
      description: 'Legendary Breed',
      external_link:
        'ipfs://QmQR1c3VoLs9xHnL5kwzj23RCdfWmKw1QJN6jBBCrbouuB/Legendary.png',
      image:
        'ipfs://QmQR1c3VoLs9xHnL5kwzj23RCdfWmKw1QJN6jBBCrbouuB/Legendary.png',
      attributes: [
        {
          trait_type: 'Base',
          value: 'Legendary',
        },
        {
          trait_type: 'Stamina',
          value: 40,
        },
        {
          display_type: 'number',
          trait_type: 'Generation',
          value: 4,
        },
      ],
    },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getMetadata(index: number) {
    return this.metadatas[index];
  }
}
