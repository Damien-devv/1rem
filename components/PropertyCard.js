import Image from 'next/image';

export default function PropertyCard({ property }) {
  return (
    <div className='propertyCard'>
      <Image 
        src={property.image} 
        alt={property.title} 
        className='propertyImage'
        width={300}
        height={200}
      />
      <div className='propertyDetails'>
        <h3 className='propertyTitle'>{property.title}</h3>
        <p className='propertyPrice'>{property.price}</p>
        <p className='propertyLocation'>{property.location}</p>
        <div className='propertyFeatures'>
          <span>{property.bedrooms} BR</span>
          <span>{property.bathrooms} BA</span>
          <span>{property.size}</span>
        </div>
      </div>
    </div>
  );
}
